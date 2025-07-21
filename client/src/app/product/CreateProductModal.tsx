"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "@/app/(components)/Header";
type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};
type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (FormData: ProductFormData) => void;
};
const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [FormData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(FormData);
    onClose();
  };
  if (!isOpen) return null;
  const labalCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full z-20">
      CreateProductModal
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit}>
          {/**PRODUCT NAME */}
          <label htmlFor="ProductName" className={labalCssStyles}>
            Product name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={FormData.name}
            className={inputCssStyles}
            required
          />

          {/**price */}
          <label htmlFor="ProductPrice" className={labalCssStyles}>
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={FormData.name}
            className={inputCssStyles}
            required
          />

          {/**StockQuantity */}
          <label htmlFor="StockQuantity" className={labalCssStyles}>
            StockQuantity
          </label>
          <input
            type="number"
            name="StockQuantity"
            placeholder="Stock Quantity"
            onChange={handleChange}
            value={FormData.name}
            className={inputCssStyles}
            required
          />

          {/** RATing */}
          <label htmlFor="rating" className={labalCssStyles}>
            StockQuantity
          </label>
          <input
            type="number"
            name="rating"
            placeholder="rating"
            onChange={handleChange}
            value={FormData.name}
            className={inputCssStyles}
            required
          />

          {/*CREATE ACTIONS */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancle
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
