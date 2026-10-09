export const defaultUser = {
  id: 'u-100',
  name: 'Alex',
  email: 'alex@example.com',
  streak: 7,
  level: 'Beginner',
  xp: 260,
};

export const learningPaths = [
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    description: 'Learn variables, functions, arrays, objects, conditionals, and loops.',
    language: 'JavaScript',
    level: 'Absolute beginner',
    lessonsTotal: 6,
    progress: 46,
    accent: '#F7C948',
  },
  {
    id: 'python',
    title: 'Python Foundations',
    description: 'Start with syntax, data types, logic, loops, and your first mini programs.',
    language: 'Python',
    level: 'Absolute beginner',
    lessonsTotal: 6,
    progress: 33,
    accent: '#4F8EF7',
  },
];

export const lessons = [
  {
    id: 'js-1',
    language: 'JavaScript',
    title: 'Variables and values',
    difficulty: 'Beginner',
    durationMinutes: 12,
    summary: 'Understand strings, numbers, booleans, and how variables store values.',
    objective: 'You will be able to declare variables and use them in basic expressions.',
    steps: [
      'Learn what variables are and how they store data.',
      'Understand the difference between strings, numbers, and booleans.',
      'Practice reading and updating values in code.',
    ],
    example: 'const name = "Alex";\nlet score = 10;\nconsole.log(name, score);',
  },
  {
    id: 'js-2',
    language: 'JavaScript',
    title: 'Functions',
    difficulty: 'Beginner',
    durationMinutes: 15,
    summary: 'Learn to write reusable blocks of code that accept inputs and return values.',
    objective: 'You will create functions and call them with arguments.',
    steps: [
      'Understand what a function is.',
      'Learn how to pass parameters into a function.',
      'Return data from a function to reuse it elsewhere.',
    ],
    example: 'function greet(name) {\n  return "Hello, " + name;\n}\n\nconsole.log(greet("Alex"));',
  },
  {
    id: 'js-3',
    language: 'JavaScript',
    title: 'Conditionals',
    difficulty: 'Beginner',
    durationMinutes: 14,
    summary: 'Use if/else statements to make decisions in your code.',
    objective: 'You will check conditions and respond differently depending on the result.',
    steps: [
      'Learn the if statement.',
      'Explore else and else if logic.',
      'Write code that reacts to data.',
    ],
    example: 'const age = 18;\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}',
  },
  {
    id: 'py-1',
    language: 'Python',
    title: 'Printing and variables',
    difficulty: 'Beginner',
    durationMinutes: 10,
    summary: 'Print text and store values in variables using Python syntax.',
    objective: 'You will be able to print output and save information in a variable.',
    steps: [
      'Learn the print function.',
      'Create variables with names and values.',
      'Understand the role of assignment in Python.',
    ],
    example: 'name = "Alex"\nprint("Hello, " + name)',
  },
  {
    id: 'py-2',
    language: 'Python',
    title: 'If statements',
    difficulty: 'Beginner',
    durationMinutes: 13,
    summary: 'Use conditionals to control the flow of your program.',
    objective: 'You will create simple decision-making logic in Python.',
    steps: [
      'Learn how to compare values.',
      'Use if, elif, and else.',
      'Respond to different inputs in your code.',
    ],
    example: 'age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
  },
  {
    id: 'py-3',
    language: 'Python',
    title: 'Loops',
    difficulty: 'Beginner',
    durationMinutes: 18,
    summary: 'Repeat actions without writing the same lines multiple times.',
    objective: 'You will use loops to repeat tasks and iterate through data.',
    steps: [
      'Learn the for loop.',
      'Learn the while loop and when to use it.',
      'Use loops to process lists or runs repeatedly.',
    ],
    example: 'for i in range(3):\n    print(i)',
  },
];

export const starterChallenges = [
  {
    id: 'challenge-1',
    title: 'Create a greeting function',
    language: 'JavaScript',
    difficulty: 'Easy',
    prompt: 'Write a function that returns a greeting using a name passed as an argument.',
  },
  {
    id: 'challenge-2',
    title: 'Check a user age',
    language: 'Python',
    difficulty: 'Easy',
    prompt: 'Write a function that tells the user if they are old enough to access a service.',
  },
  {
    id: 'challenge-3',
    title: 'Loop over a list',
    language: 'Python',
    difficulty: 'Easy',
    prompt: 'Print each item in a list using a loop.',
  },
];

export const quizBank = [
  {
    id: 'q-js-1',
    lessonId: 'js-1',
    question: 'Which keyword is used to declare a variable that should not be reassigned?',
    options: ['var', 'let', 'const', 'function'],
    answer: 'const',
  },
  {
    id: 'q-js-2',
    lessonId: 'js-2',
    question: 'What does a function return?',
    options: ['Only numbers', 'Only strings', 'A value when used with return', 'Nothing at all'],
    answer: 'A value when used with return',
  },
  {
    id: 'q-py-1',
    lessonId: 'py-1',
    question: 'Which function prints text to the console in Python?',
    options: ['echo()', 'print()', 'output()', 'log()'],
    answer: 'print()',
  },
  {
    id: 'q-py-2',
    lessonId: 'py-2',
    question: 'What is the purpose of an if statement?',
    options: ['To repeat code', 'To make a decision', 'To store data', 'To import modules'],
    answer: 'To make a decision',
  },
];

export const userProgress = {
  totalLessonsCompleted: 2,
  streak: 7,
  xp: 260,
  nextGoal: 'Finish the JavaScript basics path',
  completedLessonIds: ['js-1', 'py-1'],
};
