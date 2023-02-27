import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const TaskForm = ({create}) => {

    const [text, setText] = useState('')

    const addTask = (e) => {
        e.preventDefault()
        const newTask = {
            id: Date.now(),
            text,
            isDone: false
        }
        create(newTask)
        setText('')
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                    value={text}
                    onChange={e => setText(e.target.value)}
                    type="text"
                    placeholder="Текст задачи"
                    className="form-group"
                />
                <Form.Text className="text-muted">Что делаем, сколько времени тратим, какой результат получаем.</Form.Text>
            </Form.Group>
            <Button
                variant='primary'
                size='lg'
                active
                onClick={addTask}
            >
                Добавить
            </Button>
        </Form>
    );
};

export default TaskForm;