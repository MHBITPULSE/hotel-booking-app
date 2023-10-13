import React, { useRef, useState } from 'react'
import { filterRoom } from '../../api/room.api'
import { useDispatch } from 'react-redux'
import { updateRooms } from '../../redux/roomSlice'

const Sidebar = () => {

    const dispatch = useDispatch()

    const filter = useRef({})

    const facilities = useRef({
    })

    const handleChange = (e) => {
        if (e.target.type === 'checkbox')
            facilities.current = { ...facilities.current, [e.target.name]: e.target.checked }
        if (e.target.name === 'sizeGt')
            facilities.current = { ...facilities.current, [e.target.name]: e.target.value }
        if (e.target.name === 'priceRadio') {
            switch (e.target.value) {
                case "0":
                    facilities.current = { ...facilities.current, priceGt: 0, priceLt: 1000000000000 }
                    break;
                case "50":
                    facilities.current = { ...facilities.current, priceGt: 49999, priceLt: 10000000 }
                    break;
                case "30":
                    facilities.current = { ...facilities.current, priceGt: 29999, priceLt: 50000 }
                    break;
                case "20":
                    facilities.current = { ...facilities.current, priceGt: 19999, priceLt: 30000 }
                    break;
                case "10":
                    facilities.current = { ...facilities.current, priceGt: 0, priceLt: 20000 }
                    break;
                default:
                    break;
            }
        }

        console.log(facilities.current)

        filterRoom(facilities.current)
            .then(response => {
                console.log(response)
                dispatch(updateRooms(response.data))
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='border border-secondary-subtle rounded p-2 m-2 bg-white '>
                <label htmlFor="" className='p-2'>Room Size</label>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeGt" value="0" id="firstRadio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="firstRadio">All</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeGt" value="1000" id="secondRadio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="secondRadio">>1000 sft</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeGt" value="500" id="thirdRadio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="thirdRadio">>500 sft</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeGt" value="200" id="thirdRadio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="thirdRadio">>200 sft</label>
                    </li>
                </ul>
            </div>

            <div className='border border-secondary-subtle rounded p-2 m-2 bg-white '>
                <label htmlFor="" className='p-2'>Price Range</label>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="0" id="price1Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price1Radio">All</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="50" id="price2Radio" onChange={handleChange} />
                        <label className="form-check-label " htmlFor="price2Radio">  50,000 - 1,00,000 BDT</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="30" id="price3Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">30,000-50,000 BDT</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="20" id="price4Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">20,000-30,000 BDT</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="10" id="price4Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">0-20,000 BDT</label>
                    </li>
                </ul>
            </div>

            <div className='border border-secondary-subtle rounded p-2 m-2 bg-white '>
                <label htmlFor="" className='p-2'>Facilities</label>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio1" value="" id="price1Radio" />
                        <label className="form-check-label" htmlFor="price1Radio">All</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="hasTv" value="" id="price2Radio" onChange={handleChange} />
                        <label className="form-check-label " htmlFor="price2Radio">  TV</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="hasFridge" value="" id="price3Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">Fridge</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="hasLocker" value="" id="price4Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">Locker</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="hasDressingTable" value="" id="price4Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">Dressing Table</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="hasButhTub" value="" id="price4Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">ButhTub</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="hasBalcony" value="" id="price4Radio" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="price3Radio">Balcony</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar