import React from 'react'

const Profile = () => {
    const data = [{ name: "Akshay", id: 123456, college: "IIM", address: "Chennaicfvbjkghfvhjhgfklv b,c;kjhvjbjkhg", events: ["ertyui", "dfghjk", "edrtfgy"] }]
    return (
        <section className='profilecont'>
        <div>
            <div className='heading'>EDIT PROFILE</div>
            <div className='pcontainer'>
                {data.map((data) => {
                    return <div className='pcontainer-image'>
                        <div className='profile-img'></div>
                        <div className='id-title'>SHAASTRA ID</div>
                        <div className='shaastra-id'>{data.id}</div>
                    </div>
                })}
                <div className='container-info1'>
                    <div className='name'>Name</div>
                    <input className='name-edit'></input>
                    <div className='college'>COLLEGE/OCCUPATION</div>
                    <input className='college-edit'>{data.address}</input>
                    <div className='address'>ADDRESS</div>
                    <input className='address-edit'></input>
                    <button className='save'>Save</button>
                </div>
            </div></div>
            </section>

    )
}

export default Profile
