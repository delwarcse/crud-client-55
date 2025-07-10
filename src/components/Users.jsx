import { useLoaderData } from "react-router";

const Users = () => {
    const users = useLoaderData();
    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`,
            {
            method:'DELETE'
        }
    )
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
//option 2
//     const handleDelete = (_id) => {
//   console.log('delete', _id);
//   fetch(`http://localhost:5000/users/${_id}`, {
//     method: 'DELETE'
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       if (data.success) {
//         alert("User deleted!");
//         // optionally: state থেকে user remove করে UI update করো
//       } else {
//         alert("Failed to delete!");
//       }
//     });
// };


    return (
        <div>
            <h2>Total Users are: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id} user={user}>
                        {user.name}: {user.email}
                        <button onClick={() => handleDelete(user._id)}>
                            X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;