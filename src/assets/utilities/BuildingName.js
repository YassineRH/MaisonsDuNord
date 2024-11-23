const buildings = { A: "Local Commercial A", B: "Bâtiment B", C: "Bâtiment C" };

const BuildingName = (buildingName) => {
  return buildings[buildingName];
};

export default BuildingName;
