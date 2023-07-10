"use client"

import { Todo } from "@/lib/schema";
import useSWR from 'swr';


const TodoList = () => {
    const { data: todos, isLoading, error } = useSWR('/api/todo')

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>

    return (

        <div className="max-h-[350px] overflow-auto mb-4 ">
            {
                todos.map((item: Todo) => {
                    return (
                        <div key={item.id} className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5">
                            {/* Circle */}
                            <div className="h-3 w-3 bg-secondary rounded-full"></div>
                            {/* Task Title */}
                            <p className="text-lg font-medium">{item.task}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TodoList

