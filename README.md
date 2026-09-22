# Portfolio frontend

This is the Vite React frontend for the portfolio. Project and certificate content is stored in the frontend data modules.

## Setup

1. Run `npm install` in this directory.
2. Run `npm run dev`.

Project data is in `src/data/personalProjects.js` and `src/data/academicProjects.js`. Certificate data is in `src/data/certeficates.js`.

## Add IT Projects and Certificates

Use `src/data/data.js` as the single editable file for IT projects and certificates.

1. Upload the image or video to Google Drive.
2. Set sharing to **Anyone with the link** and **Viewer**.
3. Copy the file ID from a link such as `https://drive.google.com/file/d/FILE_ID/view`.
4. Add the ID with `googleDriveImage('FILE_ID')` or `googleDriveVideo('FILE_ID')`.

Example IT project:

```js
{
	title: 'Network Monitoring Lab',
	category: 'it',
	description: 'Monitoring and troubleshooting project.',
	tags: ['Networking', 'Linux'],
	link: 'https://example.com',
	image: googleDriveImage('IMAGE_FILE_ID'),
	video: googleDriveVideo('VIDEO_FILE_ID'),
},
```

Example certificate media:

```js
img: googleDriveImage('CERTIFICATE_FILE_ID'),
links: [
	{ label: 'View certificate', type: 'image', target: googleDriveImage('CERTIFICATE_FILE_ID') },
],
```

The old `academicProjects.js` and `certeficates.js` files remain as compatibility exports to `data.js`.

## Checks

Run `npm run lint` and `npm run build` before deployment.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
