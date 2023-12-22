// import { useEffect, useState } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import toast from "react-hot-toast";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

const TaskBoard = ({ tasks, refetch }) => {
	const axiosPublic = useAxiosPublic();

	const handleDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		if (!destination) return;
		if (source?.droppableId == destination?.droppableId) return;

		let category = "";
		if (destination?.droppableId == 1) {
			category = "to-do";
		} else if (destination?.droppableId == 2) {
			category = "ongoing";
		} else if (destination?.droppableId == 3) {
			category = "completed";
		}

		axiosPublic
			.patch(`/tasks/${draggableId}`, { category })
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					toast("Task Updated Successfully!", {
						icon: "📢",
						style: {
							borderRadius: "8px",
							background: "#333",
							color: "#fff",
						},
					});
					refetch();
				}
			})
			.catch((err) => {
				toast(err.message, {
					icon: "❌",
					style: {
						borderRadius: "8px",
						background: "#333",
						color: "#fff",
					},
				});
			});
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<h2 className="text-center text-3xl font-bold my-4">MY TASK BOARD</h2>
			<p className="text-center italic mb-2 text-xs">
				** Drag a task to the top of your desired category!
			</p>
			<div className="flex justify-between items-center md:flex-row flex-col">
				<Column
					title={"TO DO"}
					refetch={refetch}
					tasks={tasks.filter((task) => task.category === "to-do")}
					id={"1"}
				/>
				<Column
					title={"ONGOING"}
					refetch={refetch}
					tasks={tasks.filter((task) => task.category === "ongoing")}
					id={"2"}
				/>
				<Column
					title={"COMPLETED"}
					refetch={refetch}
					tasks={tasks.filter((task) => task.category === "completed")}
					id={"3"}
				/>
			</div>
		</DragDropContext>
	);
};

export default TaskBoard;
