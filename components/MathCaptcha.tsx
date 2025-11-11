'use client';

import React, { useState, useEffect } from 'react';

interface MathCaptchaProps {
  onValidationChange: (isValid: boolean) => void;
  className?: string;
}

export default function MathCaptcha({ onValidationChange, className = '' }: MathCaptchaProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);

  // Generate new math problem
  const generateProblem = () => {
    const operators = ['+', '-', '×'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    
    let newNum1, newNum2;
    
    if (randomOperator === '×') {
      // For multiplication, use smaller numbers (1-9)
      newNum1 = Math.floor(Math.random() * 9) + 1;
      newNum2 = Math.floor(Math.random() * 9) + 1;
    } else {
      // For addition and subtraction, use numbers 1-20
      newNum1 = Math.floor(Math.random() * 20) + 1;
      newNum2 = Math.floor(Math.random() * 20) + 1;
      
      // For subtraction, ensure positive result
      if (randomOperator === '-' && newNum1 < newNum2) {
        [newNum1, newNum2] = [newNum2, newNum1];
      }
    }
    
    setNum1(newNum1);
    setNum2(newNum2);
    setOperator(randomOperator);
    setUserAnswer('');
    setIsCorrect(false);
    setShowError(false);
    onValidationChange(false);
  };

  // Calculate correct answer
  const getCorrectAnswer = () => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '×':
        return num1 * num2;
      default:
        return num1 + num2;
    }
  };

  // Handle user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAnswer(value);
    
    if (value === '') {
      setIsCorrect(false);
      onValidationChange(false);
      setShowError(false);
      return;
    }
    
    const answer = parseInt(value);
    const correctAnswer = getCorrectAnswer();
    
    if (answer === correctAnswer) {
      setIsCorrect(true);
      onValidationChange(true);
      setShowError(false);
    } else {
      setIsCorrect(false);
      onValidationChange(false);
      setShowError(false);
    }
  };

  // Handle refresh button
  const handleRefresh = () => {
    generateProblem();
  };

  // Generate initial problem on component mount
  useEffect(() => {
    generateProblem();
  }, []);

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-lg font-semibold text-gray-800">{num1}</span>
          <span className="text-lg font-semibold text-gray-600">{operator}</span>
          <span className="text-lg font-semibold text-gray-800">{num2}</span>
          <span className="text-lg font-semibold text-gray-600">=</span>
        </div>
        
        <input
          type="number"
          name="verification"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="?"
          className={`w-20 px-3 py-3 border-2 rounded-lg text-center text-lg font-semibold transition-all duration-200 ${
            isCorrect 
              ? 'border-green-500 bg-green-50 text-green-700' 
              : userAnswer 
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
          }`}
        />
        
        <button
          type="button"
          onClick={handleRefresh}
          className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
          title="Generate new problem"
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      
      {showError && (
        <p className="text-sm text-red-600 flex items-center">
          <i className="fas fa-exclamation-circle mr-2"></i>
          Incorrect answer. Please try again.
        </p>
      )}
      
      {isCorrect && (
        <p className="text-sm text-green-600 flex items-center">
          <i className="fas fa-check-circle mr-2"></i>
          Verification successful!
        </p>
      )}
      
      <p className="text-xs text-gray-500">
        Please solve this simple math problem to verify you're human.
      </p>
    </div>
  );
}




