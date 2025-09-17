import React, { useState } from 'react';
import { Card, Input, Button, Checkbox, Radio, Space, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TaskManagement: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTaskName, setEditTaskName] = useState<string>('');

  const addTask = () => {
    if (!newTask.trim()) {
      message.error('Vui lòng nhập tên công việc!');
      return;
    }
    const newTaskObj: Task = {
      id: Date.now(),
      name: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    message.success('Thêm công việc thành công!');
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    message.success('Xóa công việc thành công!');
  };

  const deleteCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
    message.success('Xóa các công việc hoàn thành thành công!');
  };

  const deleteAll = () => {
    setTasks([]);
    message.success('Xóa tất cả công việc thành công!');
  };

  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditTaskName(task.name);
  };

  const saveEdit = (id: number) => {
    if (!editTaskName.trim()) {
      message.error('Tên công việc không được để trống!');
      return;
    }
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: editTaskName } : task
      )
    );
    setEditingTaskId(null);
    setEditTaskName('');
    message.success('Cập nhật công việc thành công!');
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditTaskName('');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', padding: '0 20px' }}>
      <Card
        title={<h2 style={{ textAlign: 'center', margin: 0, fontSize: '24px' }}>Quản lý công việc</h2>}
        style={{ marginBottom: 20 }}
      >
        <Space.Compact style={{ width: '100%', marginBottom: 20 }}>
          <Input
            placeholder="Nhập tên công việc"
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
            onPressEnter={addTask}
            style={{ fontSize: '16px', height: '45px' }}
          />
          <Button
            type="primary"
            onClick={addTask}
            style={{ height: '45px', fontSize: '16px', minWidth: '120px' }}
          >
            Thêm công việc
          </Button>
        </Space.Compact>

        <Radio.Group
          value={filter}
          onChange={(e: RadioChangeEvent) => setFilter(e.target.value)}
          style={{ marginBottom: 20, width: '100%' }}
        >
          <Radio.Button value="all" style={{ minWidth: '80px', textAlign: 'center' }}>
            Tất cả
          </Radio.Button>
          <Radio.Button value="completed" style={{ minWidth: '100px', textAlign: 'center' }}>
            Hoàn thành
          </Radio.Button>
          <Radio.Button value="active" style={{ minWidth: '120px', textAlign: 'center' }}>
            Đang thực hiện
          </Radio.Button>
        </Radio.Group>

        <div style={{ minHeight: '200px' }}>
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #f0f0f0',
                fontSize: '16px',
              }}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ marginRight: '12px' }}
              />
              {editingTaskId === task.id ? (
                <Space style={{ flex: 1 }}>
                  <Input
                    value={editTaskName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTaskName(e.target.value)}
                    onPressEnter={() => saveEdit(task.id)}
                    style={{ fontSize: '16px' }}
                  />
                  <Button type="primary" onClick={() => saveEdit(task.id)}>
                    Lưu
                  </Button>
                  <Button onClick={cancelEdit}>Hủy</Button>
                </Space>
              ) : (
                <>
                  <span
                    style={{
                      flex: 1,
                      textDecoration: task.completed ? 'line-through' : 'none',
                      color: task.completed ? '#999' : '#000',
                      fontSize: '16px',
                    }}
                  >
                    {task.name}
                  </span>
                  <Space>
                    <Button
                      type="text"
                      icon={<EditOutlined />}
                      onClick={() => startEditing(task)}
                      style={{ color: '#faad14' }}
                    />
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => deleteTask(task.id)}
                      style={{ color: '#ff4d4f' }}
                    />
                  </Space>
                </>
              )}
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                color: '#999',
                padding: '40px 0',
                fontSize: '16px',
              }}
            >
              {filter === 'all'
                ? 'Chưa có công việc nào'
                : filter === 'completed'
                ? 'Chưa có công việc hoàn thành'
                : 'Chưa có công việc đang thực hiện'}
            </div>
          )}
        </div>

        <Space style={{ width: '100%', justifyContent: 'space-between', marginTop: '20px' }}>
          <Button
            danger
            onClick={deleteCompleted}
            disabled={tasks.filter((t) => t.completed).length === 0}
            style={{ fontSize: '14px' }}
          >
            Xóa công việc hoàn thành
          </Button>
          <Button
            danger
            onClick={deleteAll}
            disabled={tasks.length === 0}
            style={{ fontSize: '14px' }}
          >
            Xóa tất cả công việc
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default TaskManagement;