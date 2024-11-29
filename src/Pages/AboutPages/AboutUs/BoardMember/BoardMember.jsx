
const boardMembers = [
  {
    name: 'Obaid Shaikh',
    title: 'Founder & Chief Strategist',
    imageUrl: 'https://soundlinesgroup.com/wp-content/uploads/2023/02/Need-Image-13.jpg', // Replace with actual image URL
  },
  {
    name: 'Bilal Dadan',
    title: 'Group CEO',
    imageUrl: 'https://soundlinesgroup.com/wp-content/uploads/2022/08/1-1.png', // Replace with actual image URL
  },
  {
    name: 'Sandy Supreeth',
    title: 'Group Managing Director',
    imageUrl: 'https://soundlinesgroup.com/wp-content/uploads/2023/02/Need-Image-13.jpg', // Replace with actual image URL
  },
  {
    name: 'R V Jaysimhan',
    title: 'Group Finance Director',
    imageUrl: 'https://soundlinesgroup.com/wp-content/uploads/2022/08/Untitled-design-36.jpg', // Replace with actual image URL
  },
  {
    name: 'Muzammil Shaikh',
    title: 'Group Co Founder',
    imageUrl: 'https://soundlinesgroup.com/wp-content/uploads/2023/02/muzmuzz.jpg', // Replace with actual image URL
  },
  {
    name: 'Maanasa S',
    title: 'Group Marketing Director',
    imageUrl: 'https://soundlinesgroup.com/wp-content/uploads/2023/02/muzmuzz.jpg', // Replace with actual image URL
  },
];

const BoardMember = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-red-500 italic">Our experts</h2>
        <h1 className="text-4xl font-light mb-2">Board Members</h1>
        <hr className="w-24 mx-auto border-t-2 border-blue-400" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {boardMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMember;
