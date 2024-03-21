import React, { useRef,useState } from 'react'
import Url_output from './Url_output';

const Url_Input = () => {
    const accessToken = '7d1eea1fee5ad2376e4e06ac61a715957f59be8e';
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    const [shortlink, setShortlink] = useState(null);
    // let data = fs.readFileSync("./data.json");
    // let linkdata = JSON.parse(data);
    const link = useRef(null);
    const handleShorten = async () => {
        setShortlink(null)
        const longUrl = link.current.value;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ long_url: longUrl }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.link);
            setShortlink(data.link); // Set the state here
        })
        .catch(error => console.error(error));
        // console.log(link.current.value);
        // const newdata= {}
        // newdata.org=link.current.value;
        // newdata.value=window.location.href+Math.round((Math.random()*100000));
        // console.log(newdata);
        // linkdata.push(newdata);
    }


    return (
        <div className='text-white p-20'>
            <form action="" ></form>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" ref={link} id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the URL" required />
                <button type="submit" onClick={handleShorten} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shorten</button>
            </div>

            {/* {window.location.href + shortlink} */}

            {shortlink!=null?<Url_output result={shortlink}/>:""}
        </div>
    )
}

export default Url_Input