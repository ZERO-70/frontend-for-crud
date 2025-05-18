# Portfolio CRUD App

This project is a React application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a Portfolio API. The application is structured to manage various aspects of a portfolio, including education, skills, projects, and experiences.

## Features

- **Education Management**: View, add, edit, and delete education entries.
- **Skills Management**: View, add, edit, and delete skills.
- **Projects Management**: View, add, edit, and delete projects.
- **Experiences Management**: View, add, edit, and delete work experiences.

## Technologies Used

- React
- TypeScript
- Axios (for API calls)
- React Router (for routing)

## Project Structure

```
portfolio-crud-app
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── index.ts
│   ├── components
│   │   ├── Education
│   │   │   ├── EducationList.tsx
│   │   │   ├── EducationForm.tsx
│   │   │   └── EducationDetail.tsx
│   │   ├── Skills
│   │   │   ├── SkillsList.tsx
│   │   │   ├── SkillsForm.tsx
│   │   │   └── SkillsDetail.tsx
│   │   ├── Projects
│   │   │   ├── ProjectsList.tsx
│   │   │   ├── ProjectsForm.tsx
│   │   │   └── ProjectsDetail.tsx
│   │   └── Experiences
│   │       ├── ExperiencesList.tsx
│   │       ├── ExperiencesForm.tsx
│   │       └── ExperiencesDetail.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-crud-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate through the application to manage your portfolio.
- Use the provided forms to add new entries for education, skills, projects, and experiences.
- Click on existing entries to view details or edit them.

## License

This project is licensed under the MIT License.