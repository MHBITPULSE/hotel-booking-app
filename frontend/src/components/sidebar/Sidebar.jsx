import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className='border border-secondary-subtle rounded p-2 m-2 bg-white '>
                <label htmlFor="" className='p-2'>Room Size</label>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeRadio" value="" id="firstRadio" />
                        <label className="form-check-label" for="firstRadio">All</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeRadio" value="" id="secondRadio" />
                        <label className="form-check-label" for="secondRadio">>1000 sft</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeRadio" value="" id="thirdRadio" />
                        <label className="form-check-label" for="thirdRadio">>500 sft</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="sizeRadio" value="" id="thirdRadio" />
                        <label className="form-check-label" for="thirdRadio">>200 sft</label>
                    </li>
                </ul>
            </div>

            <div className='border border-secondary-subtle rounded p-2 m-2 bg-white '>
                <label htmlFor="" className='p-2'>Price Range</label>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="" id="price1Radio" />
                        <label className="form-check-label" for="price1Radio">All</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="" id="price2Radio" />
                        <label className="form-check-label " for="price2Radio">  50,000 - 1,00,000 BDT</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="" id="price3Radio" />
                        <label className="form-check-label" for="price3Radio">30,000-40,000 BDT</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="" id="price4Radio" />
                        <label className="form-check-label" for="price3Radio">20,000-30,000 BDT</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="priceRadio" value="" id="price4Radio" />
                        <label className="form-check-label" for="price3Radio">0-20,000 BDT</label>
                    </li>
                </ul>
            </div>

            <div className='border border-secondary-subtle rounded p-2 m-2 bg-white '>
                <label htmlFor="" className='p-2'>Facilities</label>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio1" value="" id="price1Radio" />
                        <label className="form-check-label" for="price1Radio">All</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio2" value="" id="price2Radio" />
                        <label className="form-check-label " for="price2Radio">  TV</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio3" value="" id="price3Radio" />
                        <label className="form-check-label" for="price3Radio">Fridge</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio4" value="" id="price4Radio" />
                        <label className="form-check-label" for="price3Radio">Locker</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio4" value="" id="price4Radio" />
                        <label className="form-check-label" for="price3Radio">Dressing Table</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio4" value="" id="price4Radio" />
                        <label className="form-check-label" for="price3Radio">ButhTub</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio4" value="" id="price4Radio" />
                        <label className="form-check-label" for="price3Radio">Balcony</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar