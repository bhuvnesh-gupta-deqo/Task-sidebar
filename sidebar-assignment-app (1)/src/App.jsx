import Sidebar from "./Sidebar";

function App() {
  const menuData = [
    { id: 1, label: "Home", children: [] },
    {
      id: 2,
      label: "About",
      children: [
        { id: 3, label: "Team", children: [] },
        { id: 4, label: "Locations", children: [] },
      ],
    },
    {
      id: 5,
      label: "Services",
      children: [
        {
          id: 6,
          label: "Web Development",
          children: [
            { id: 7, label: "Frontend", children: [] },
            { id: 8, label: "Backend", children: [] },
          ],
        },
        { id: 9, label: "Design", children: [] },
      ],
    },
    {
      id: 10,
      label: "Contact",
      children: [
        { id: 11, label: "Email", children: [] },
        { id: 12, label: "Phone", children: [] },
      ],
    },
  ];

  return (
    <div>
      <Sidebar menu={menuData} />
    </div>
  );
}

export default App;
