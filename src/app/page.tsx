"use client";

import Image from "next/image";
import { useState } from "react";

// 1. Violation of Single Responsibility Principle (SRP) (Clean Code JavaScript)
// The App component is responsible for too many things, including rendering the Header, Main, and Footer components,
// as well as handling state and logic for the entire application.
// Solution: Refactor the App component to follow the SRP by separating concerns into smaller, more focused components.
function CarSelector({ cars, onCarSelect }: any) {
  // 1. no-dupe-else-if (ESLint)
  // This rule disallows duplicate conditions in if-else-if chains.
  // Solution: Avoid having duplicate conditions in if-else-if chains.
  if (cars.length > 0) {
    // Do something
  } else if (cars.length === 0) {
    // Do something
  } else if (cars.length === 0) {
    // This condition is a duplicate and should be removed
  } else {
    // Do something
  }

  return (
    <div>
      <h1>Select a Car</h1>
      <div>
        {/* 2. Lack of Type Safety in JSX (Clean Code JavaScript) */}
        {/* Solution: Add type annotations for the car object */}
        {cars.map((car: { make: string; model: string }, index: any) => (
          <button key={index} onClick={() => onCarSelect(car)}>
            {car.make} {car.model}
          </button>
        ))}
      </div>
    </div>
  );
}

function ColorSelector({ selectedCar, onColorSelect }: any) {
  // 2. no-self-assign (ESLint)
  // This rule disallows assignments where both sides are exactly the same.
  // Solution: Avoid assigning a variable to itself.
  let selectedColor = "Red";
  selectedColor = selectedColor;

  return (
    <div>
      <h2>
        Select a Color for your {selectedCar.make} {selectedCar.model}
      </h2>
      <div>
        <button onClick={() => onColorSelect(selectedColor)}>
          {selectedColor}
        </button>
        <button onClick={() => onColorSelect("Blue")}>Blue</button>
        <button onClick={() => onColorSelect("Green")}>Green</button>
      </div>
    </div>
  );
}

function CarPreview({ selectedCar, selectedColor }: any) {
  // 3. no-dupe-args (ESLint)
  // This rule disallows duplicate arguments in function definitions.
  // Solution: Avoid having duplicate arguments in function definitions.
  function handleImageLoaded(
    _: React.SyntheticEvent<HTMLImageElement>,
    __: string
  ) {
    // This function has a duplicate argument '_'
  }

  return (
    <div>
      <h2>
        Your selected car is a {selectedCar.make} {selectedCar.model} painted
        {selectedColor}.
      </h2>
      <Image
        src="/image.jpg"
        alt={`${selectedCar.make} ${selectedCar.model}`}
        width={500}
        height={300}
        onLoad={(event) => handleImageLoaded(event, "additional argument")}
      />
    </div>
  );
}

function App() {
  // 3. Lack of Type Annotations (Clean Code JavaScript)
  // Solution: Add type annotations for the state variables
  const [selectedCar, setSelectedCar] = useState<{
    make: string;
    model: string;
  } | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // 4. Inconsistent Naming Conventions (Clean Code JavaScript)
  // Solution: Use consistent naming conventions for the functions
  const handleCarSelect = (car: { make: string; model: string }) => {
    setSelectedCar(car);
    setSelectedColor(null); // Reset the selected color when a new car is chosen
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  // 5. Lack of Type Checking (Clean Code JavaScript)
  // Solution: Add type annotations for the cars array
  const cars: { make: string; model: string; color: string }[] = [
    { make: "Honda", model: "Accord", color: "Blue" },
    { make: "Toyota", model: "Camry", color: "Red" },
    { make: "Ford", model: "Mustang", color: "Green" },
  ];

  // 4. no-unreachable (ESLint)
  // This rule disallows unreachable code after return, throw, continue, and break statements.
  // Solution: Ensure that there is no unreachable code in the function.
  function handleUnreachableCode() {
    return;
    console.log("This code is unreachable and should be removed");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <CarSelector cars={cars} onCarSelect={handleCarSelect} />
        {selectedCar && (
          <ColorSelector
            selectedCar={selectedCar}
            onColorSelect={handleColorSelect}
          />
        )}
        {selectedCar && selectedColor && (
          <CarPreview selectedCar={selectedCar} selectedColor={selectedColor} />
        )}
      </div>
    </main>
  );
}

// 6. Avoid Magic Numbers (Clean Code JavaScript)
// Solution: Use a constant for the z-index value
const HEADER_Z_INDEX = 100;

export default function Home() {
  // 5. no-unused-vars (ESLint)
  // This rule disallows unused variables.
  // Solution: Remove any unused variables in the code.
  const carTest = "carTest";

  return <App />;
}
