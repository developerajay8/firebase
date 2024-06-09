import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-3 bg-white shadow'>
            <header className='max-w-[1200px] mx-auto flex justify-between items-center'>
                <div className="text-2xl font-bold">Quizz</div>
                <ul className='flex gap-5'>
                    <li>
                        <Link to={"/"}>
                            Listing
                        </Link>
                    </li>
                    <li>
                        <Link to={"/add"}>
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link to={"/play"}>
                            Play
                        </Link>
                    </li>
                    <li>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
