# Green Badge - Environmental Badge System

A React-based environmental badge system for showcasing users' achievements in waste sorting and environmental protection.

## Features

- 🏆 Badge display system
- 📊 Statistics and charts
- 🎨 3D badge model showcase
- 📱 Responsive design
- 🌱 Environmental theme
- ✨ Splash screen animation

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Three.js (3D rendering)
- Framer Motion (animations)
- React Query (data management)
- React Router (routing)

## Installation and Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/           # Base UI components
│   ├── badges/       # Badge-related components
│   ├── statistics/   # Statistics components
│   └── BadgeUnlock.jsx # Splash screen animation component
├── pages/            # Page components
├── api/              # API client
├── utils/            # Utility functions
└── entities/         # Data models
```

## Development Notes

- Project uses mock data for development
- All badge data is statically generated
- 3D model functionality requires actual .glb file support
- UI components are based on Radix UI and custom styling
- Includes beautiful splash screen animation effects

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
