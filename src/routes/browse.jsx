import { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import SkiList from '../components/SkiList';
import SkiPreview from '../components/SkiPreview';

export default function Browse () {
    const skis = useRouteLoaderData("root")
    const [selectedSkiId, setSelectedSkiId] = useState(1)
    const featuredSki = skis.find(ski => ski.id === selectedSkiId)

    return (
        <div className='flex flex-row p-8 w-4/5 block mx-auto'>
            <SkiList skis={skis} onSelectSki={setSelectedSkiId}/>
            <SkiPreview featuredSki={featuredSki}/>
        </div>
    )
}

//add filters here that use the useSearchParams hook