export const Listing = ({ notes, handleDelete, handleUpdate }) => {
  return (
    <>
      <div className="output">
        <ul>
          {notes.map((list) => (
            <li key={list.id}>
              <strong className="title">{list.title}</strong>
              <div className="btn-mini">
                <button onClick={() => handleUpdate(list)}>Edit</button>
                <button onClick={() => handleDelete(list.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
