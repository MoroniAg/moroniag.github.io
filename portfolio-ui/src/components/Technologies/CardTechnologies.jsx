import React from "react";

export default function CardTechnologies({ title, desc, icon }) {
  const isString = typeof icon === "string";

  return (
    <div className="flex flex-col items-center p-4 bg-(--brand-dark-light) rounded-lg shadow-md">
      {icon ? (
        isString ? (
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 mb-2 object-contain"
          />
        ) : (
          <icon className="w-12 h-12 mb-2" />
        )
      ) : (
        <div className="w-12 h-12 mb-2 bg-(--brand-dark) rounded" />
      )}
      <div className="font-semibold text-lg text-(--brand-darker)">{title}</div>
      <div className="text-sm text-(--brand-dark) text-center mt-1">{desc}</div>
    </div>
  );
}
