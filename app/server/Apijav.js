import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const items = [
  {
    id: 1,
    category: 'Artist',
    name: 'Eimi Fukada',
    infoUrl: 'https://www.sanook.com/men/78881/',
    age: 31,
    birthday: '1995-12-01',
    music: 'Romantic Vibes',
    imageUrl: '/image/Eimi Fukada.jpg',
    description: 'Eimi Fukada is a Japanese AV actress and model, known for her daring performances.'
  },
  {
    id: 2,
    category: 'Artist',
    name: 'Minami Aizawa',
    infoUrl: 'https://www.sanook.com/news/9738822/',
    age: 28,
    birthday: '1997-02-01',
    music: 'Koi no Yokan',
    imageUrl: '/image/Minami Aizawa.jpg',
    description: 'Minami Aizawa is a renowned Japanese actress and model, popular for her bold roles.'
  },
  {
    id: 3,
    category: 'Artist',
    name: 'Rara Anzai',
    infoUrl: 'https://www.instagram.com/rara_anzai/?hl=en',
    age: 25,
    birthday: '1998-07-07',
    music: 'Hot Summer',
    imageUrl: '/image/rara-anzai.jpg',
    description: 'Rara Anzai is a Japanese star with a reputation for her captivating performances.'
  },
  {
    id: 4,
    category: 'Artist',
    name: 'Shoko Takahashi',
    infoUrl: 'https://www.instagram.com/ts_takashoko/?hl=en',
    age: 29,
    birthday: '1995-03-10',
    music: 'Shining Lights',
    imageUrl: '/image/ShokoTakahashi.jpg',
    description: 'Shoko Takahashi is a captivating Japanese artist known for her dramatic performances.'
  },
  {
    id: 5,
    category: 'Artist',
    name: 'Yua Mikami',
    infoUrl: 'https://www.instagram.com/yua_mikami/',
    age: 31,
    birthday: '1994-11-01',
    music: 'Scream of Love',
    imageUrl: '/image/YuaMikami.jpg',
    description: 'Yua Mikami is a famous Japanese actress, idol, and musician known for her bold performances.'
  }
];

// Routes
app.get('/api/jav', (req, res) => {
  res.json(items);
});

app.get('/api/jav/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
