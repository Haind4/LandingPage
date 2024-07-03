import React from 'react'
import './Participation.scss';
import MedicSchool from '../../Images/MedicSchool.png';
import MedicHopital from '../../Images/MedcHospital.png';
import MedicLand from '../../Images/MedicLand.png';
import MedicDSC from '../../Images/DSC05641.png';
function Participation() {
    const data = [
        { title: "Trường học", link: MedicSchool.src },
        { title: "Bệnh viện", link: MedicHopital.src },
        { title: "Bất động sản", link: MedicLand.src },
        { title: "Thẩm mĩ", link: MedicDSC.src },

    ]
    return (
        <div className='YJMIMXRDYP'>
            <div className='WOKEYQBZMM'>
                lĩnh vực tham gia
            </div>
            <div className='PQDDKOQMGR'>
                <div className='NQVVMVLKCW'>
                    <div className='BFPIIBIRBT'>
                        {data?.map((item) => {
                            return (
                                <div className='EXREBBNDCM'>
                                    <div className='YQYKVUBVSN'>
                                        <img src={item?.link} />
                                        <div className='IAVBKRTTZW'>
                                            {item?.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participation