import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SkiList from '../components/SkiList';
import SkiDetails from '../components/SkiDetails';

export default function Browse () {
    const [skis, setSkis] = useState(useLoaderData())
    const [selectedSkiId, setSelectedSkiId] = useState(1)

    const featuredSki = skis.find(ski => ski.id === selectedSkiId)

    return (
        <div>
            <h1>Browse For Skis Here</h1>
            <SkiList skis={skis} onSelectSki={setSelectedSkiId}/>
            <SkiDetails featuredSki={featuredSki}/>
        </div>
    )
}