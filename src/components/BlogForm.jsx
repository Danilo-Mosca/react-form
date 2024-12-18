// Funzione che disegna il form per l'inserimento dati
function BlogForm({ handlerInput, handlerSubmit, postList }) {
    //parte html da ritornare
    return (
        <section className="my-4">
            <h2>Inserisci un articolo del blog</h2>
            <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Titolo del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="titlelHelp"
                        value={postList.title}
                        onChange={handlerInput}
                        name="title"
                    />
                    <div id="titlelHelp" className="form-text">
                        Il tuo articolo sarà pubblicato nel nostro blog!
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Contenuto dell'articolo
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={postList.content}
                        onChange={handlerInput}
                        name="content">
                    </textarea>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="published"
                        name="published"
                        onChange={handlerInput}
                    />
                    <label className="form-check-label" htmlFor="published">
                        Clicca qui se vuoi pubblicare subito, altrimenti lascialo in bozza
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Inserisci articolo
                </button>
            </form>
        </section>
    );
}

export default BlogForm;