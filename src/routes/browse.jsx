import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SkiList from '../components/SkiList';
import SkiPreview from '../components/SkiPreview';

export default function Browse () {
    const [skis, setSkis] = useState(useLoaderData()) //might not need state here
    const [selectedSkiId, setSelectedSkiId] = useState(1)

    const featuredSki = skis.find(ski => ski.id === selectedSkiId)

    return (
        <div className='flex flex-row p-8'>
            <SkiList skis={skis} onSelectSki={setSelectedSkiId}/>
            <SkiPreview featuredSki={featuredSki}/>
        </div>
    )
}

//add filters here that use the useSearchParams hook