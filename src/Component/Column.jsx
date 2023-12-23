import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
	background-color: #f4f5f7;
	border-radius: 2.5px;
	width: 300px;
	height: 500px;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	border: 0.5px solid lightgray;
`;

const TaskList = styled.div`
	padding: 3px;
	padding-top: 10px;
	transition: background-color 0.2s ease;
	flex-grow: 1;
	min-height: 100px;
`;

const Column = ({ title, tasks, refetch, id }) => {
	return (
		<Container className="column">
			<h3 className="text-xl font-semibold p-2 text-center bg-green-600 sticky top-0">
				{title}
			</h3>
			<Droppable droppableId={id}>
				{(provided) => (
					<TaskList ref={provided.innerRef} {...provided.droppableProps}>
						{tasks.map((task, index) => (
							<Task key={index} index={index} task={task} refetch={refetch} />
						))}
						{provided.placeholder}
					</TaskList>
				)}
			</Droppable>
		</Container>
	);
};

export default Column;
