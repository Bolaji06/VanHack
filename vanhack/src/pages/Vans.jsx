
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import VanCard from '../components/VanCard';
import { createServer, Model } from 'miragejs';
import { Link } from 'react-router-dom';
//import { mirageServer } from '../server';

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", hostId: 123, name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })
        server.create("van", { id: "2", hostId: 123, name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
        server.create("van", { id: "3", hostId: 456, name:"Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury" })
        server.create("van", { id: "4", hostId: 456, name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple" })
        server.create("van", { id: "5", hostId: 789, name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
        server.create("van", { id: "6", hostId: 678, name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
    },

    routes() {
        this.namespace = "api"

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
        this.get("/host/vans", (schema, request) => {
            return schema.vans.where({hostId: 123})
        })
        this.get("/host/vans/:id", (schema, request) => {
          const id = request.params.id;
          return schema.vans.where({ id, hostId: 123})
        })
    }
})

//mirageServer();


function Vans() {
  const [vanData, setVanData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData(){
      setIsLoading(true)
      try {
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVanData(data.vans);
      }catch(error){
        setError(error)
      }
      setIsLoading(false);
    }
    loadData()
  }, [])
  console.log(vanData)
 
  return (
    <>
        {/* <Nav /> */}
            <header className='p-6 mb-2'>
              <h1 className='font-bold text-2xl mb-4'>
                Explore our van options
              </h1>
              <div className='flex justify-between flex-wrap'>
                <div className='flex gap-3'>
                  <div className='bg-orange-100 hover:text-white focus:text-white px-4 py-1 hover:bg-orange-600 focus:bg-orange-600 rounded-sm font-medium text-black text-sm'>
                    Simple
                  </div>
                  <div className='bg-orange-100 px-4 hover:bg-black hover:text-white focus:text-white focus:bg-black py-1 rounded-sm font-medium text-black text-sm'>
                    Luxury
                  </div>
                  <div className='bg-orange-100 px-4 py-1 hover:bg-green-900 hover:text-white focus:text-white focus:bg-green-900 rounded-sm font-medium text-black text-sm'>
                    Rugged
                  </div>
                </div>
                <div className=' underline py-1  font-medium text-black text-sm'>
                  Clear Filter
                </div>
              </div>
            </header>
            <div className='p-6 flex gap-5 flex-wrap'>
              {
                vanData.map((van) => {
                  return (
                  <Link key={van.id} to={`/vans/${van.id}`}>
                      <VanCard 
                      price={van.price}
                      name={van.name}
                      description={van.description}
                      imgUrl={van.imageUrl}
                      type={van.type}/>
                  </Link>
                  )
                })
              }
             
            </div>
    </>
  )
}

export default Vans