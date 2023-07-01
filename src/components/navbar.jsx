import 'boxicons'
import { Link, Outlet } from 'react-router-dom';
export default function Navbar() {
    return(
        <>
            <div className="bg-white text-black  dark:text:while fixed top-0 w-full flex flex-row justify-between px-20 py-4 items-center">
                <div>
                    <h1 className='text-2xl font-semiboldbold '><Link to={"/"} className='text-black'>Ecommerce</Link></h1>
                </div>
                <div>
                    <ul className="flex flex-row gap-8">
                        <li><Link to={"#"}className='text-black'>Categorías</Link></li>
                        <li>Ingresa</li>
                        <li><Link to={"/acercade"} className='text-black'>Acerca De</Link></li>
                    </ul>
                </div>
                <div className='flex flex-row'>
                <div className='flex flex-row border-2 p-2 rounded-2xl gap-2'>
                    <box-icon name='search' color='gray' ></box-icon>
                    <input className='bg-white' type="search" placeholder='Buscar'/>
                </div>
                    <div>
                    <box-icon name='cart'></box-icon>
                    <box-icon name='user-circle'></box-icon>
                    </div>
                </div>Doo
            </div>
            {/* indicar que navbar va a hacer un papá */}
            <Outlet/>
        </>
    );
}