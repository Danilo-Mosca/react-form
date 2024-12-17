import { useState } from "react";
const initialPost = {
    id: "",
    title: "",
    content: "",
    state: "",
};
function BlogForm() {
    // Variabile di stato dei post
    const [post, setPost] = useState(initialPost);
    // Variabile di stato della lista di post
    const [postList, setPostList] = useState([]);

    // Funzione che gestisce gli eventi sulle Input text
    function handlerInput(event) {

    }

    // Funzione che gestisce l'evento al click sul pulsante di invio
    function handlerSubmit(event) {

    }

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
                        value={post.title}
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
                        class="form-control"
                        id="content"
                        rows="5"
                        type="text"
                        value={post.content}
                        onChange={handlerInput}
                        name="surname">
                    </textarea>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="postPublished"
                        name="published"
                        onChange={handlerInput}
                    />
                    <label className="form-check-label" htmlFor="postPublished">
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