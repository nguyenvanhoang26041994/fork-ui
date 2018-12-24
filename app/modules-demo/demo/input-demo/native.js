import React from 'react';
import {
  TextareaNative as Textarea,
  InputNative as Input,
} from '../../../components/core';

export default () => (
  <div className="flex flex-col">
    <div className="flex flex-row mb-2">
      <Input placeholder="Textbox placeholder" />
      <Input
        placeholder="Password placeholder"
        htmlType="password"
        className="ml-2"
      />
      <Input
        placeholder="Search placeholder"
        htmlType="search"
        className="ml-2"
      />
    </div>
    <div className="flex flex-row mb-2">
      <Input placeholder="Tel placeholder" htmlType="tel" />
      <Input placeholder="Url placeholder" htmlType="url" className="ml-2" />
      <Input
        placeholder="Email placeholder"
        htmlType="email"
        className="ml-2"
      />
    </div>
    <Input
      placeholder="Number placeholder"
      htmlType="number"
      className="mb-2"
    />
    <Input htmlType="time" className="mb-2" />
    <Input placeholder="Week placeholder" htmlType="week" className="mb-2" />
    <Input htmlType="month" className="mb-2" />
    <Input placeholder="Date placeholder" htmlType="date" className="mb-2" />
    <Input htmlType="datetime" className="mb-2" />
    <Input htmlType="datetime-local" className="mb-2" />
    <Textarea placeholder="Textarea placeholder" />
  </div>
);
