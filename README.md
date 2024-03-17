# React + Vite

It is an online sporting goods store.

To install a project in a local repository, you need to open the console and run the command:

> git clone https://github.com/taranykkkk/intern-test.git

After cloning the storage to your local storage, run the command:

> npm install

This command is required to set project dependencies.

After installing the dependencies run the command:

> npm run dev

After that, you will deploy the project locally in your browser:

> http://localhost:5173/

Project structure.
The src folder contains all the data and components of this project:

> assets is a folder with static elements (pictures, etc.).
> components is a folder with functional components that is also divided into other folders with components and styles (module.scss)
> scss - contains resetting of standard styles, css-variables, fonts connection.
> commentData and itemData are data for rendering components (<Comment/> , < Card/>).

This project uses the React Slick library.
There are 3 sliders on the page:
They are located in the src/components/Slider folder.
There are two folders :

> TitleSlider - it contains slider which is located after the page header (main file index.jsx)
> ItemSlider - it has the main style and settings of the slider, and it contains two folders (Comment, Card). jsx file - displays all components in the browser.

Now, after a brief introduction and explanation, you can use this project.
