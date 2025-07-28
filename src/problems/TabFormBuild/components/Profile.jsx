const Profile = ({ data, setData, error }) => {
    console.log(error)
    const { name, age, email } = data;

    const handleChange = (e, item) => {
        setData(prevState => ({
            ...prevState,
            [item]: e.target.value,
        }));
    }
    return (
        <div>
            <h1 className="font-bold">Profile</h1>
            <div>
                <label>Name </label>
                <input className="border border-black-50" type="text" value={name} onChange={(e) => handleChange(e, "name")}/>
            </div>
            {error && <span className="error">{error.name}</span>}
            <div>
                <label>Age </label>
                <input className="border border-black-50" type="number" value={age} onChange={(e) => handleChange(e, "age")} />
            </div>
            {error && <span className="error">{error.age}</span>}
            <div>
                <label>Email </label>
                <input className="border border-black-50" type="text" value={email} onChange={(e) => handleChange(e, "email")} />
            </div>
            {error && <span className="error">{error.email}</span>}

        </div>
    )
}

export default Profile;