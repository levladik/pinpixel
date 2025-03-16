# **PinPixel**

Link: <a href="https://levladik.github.io/pinpixel/" target="_blank">PinPixel</a>

**PinPixel** is a web application for creating customized maps using Mapbox. Users can choose a map style, add labels, adjust the size, and download the final map as an image.

## 🚀 **Features**

- Map style selection.
- Map customization:
  - Add custom labels.
  - Choose map size.
- Location search with an integrated search box.

## 🛠️ **Tech Stack**

- **Frontend**: React, TypeScript
- **Maps**: Mapbox API
- **Build Tool**: Vite
- **Styling**: Ant Design, CSS
- **State Management**: Zustand


## 📦 **Installation and Setup**

1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository:

```bash 
git clone https://github.com/levladik/pinpixel.git
```
3. Navigate to the project directory:
```bash
cd pinpixel
```
4. Install dependencies:
```bash
npm install
```
5. Run the application:
```bash
npm run dev
```

## Project Architecture  

### Main Components  
1. **`App`** - The root component of the application  
2. **`CustomizationPanel`** - Panel for customizing the map appearance:  
   - `CustomSearchBox` - Location search  
   - `UserLabels` - Custom label settings  
   - `MapStyles` - Map style selection  
   - `MapSizeButtons` - Map size control  

3. **`Map`** - Map display block:  
   - `MapContainer` - Container for Mapbox GL  
   - `Map` - MapBox initialisation
   - `LabelsBox` - Displays text labels on the map  

### State Management  
- **`map.poster-store` (Zustand)**:  
  - Stores poster settings: size, labels, location  
  - Handles synchronization with `localStorage`  

- **`mapbox-store` (Zustand)**:  
  - Manages map state (`mapRef`)  
  - Contains methods for interacting with the Mapbox API  

### Configuration  
- **`mapboxConfig`** - Access settings for Mapbox  
- **`mapStylesConfig`** - Configuration of available map styles  

### Utility Modules  
- **`useResponsiveMapSize`** - Hook for adapting map sizes  
