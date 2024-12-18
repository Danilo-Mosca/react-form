import { useState } from "react";
import Card from "./Card";

const initialPost = {
    id: "",
    title: "",
    image: "https://picsum.photos/640/480",
    content: "",
    published: false,
};

export default function MainComponent() {
    // Variabile di stato dei post, che conterrà un oggetto dei post
    const [post, setPost] = useState(initialPost);
    // Variabile di stato della lista di post
    const [postList, setPostList] = useState([]);


    // Funzione che gestisce gli eventi sulle Input text
    function handlerInput(event) {
        /* Metodo lungo: */
        // const newPost = { ...post };    // Mi creo una copia dell'oggetto post
        // newPost[event.target.name] = event.target.value;    //Gli assegno ogni suo corrispettivo valore
        // setPost(newPost);   // Setto la variabile oggetto di stato

        // Alla costante value assegno il valore "true" (con event.target.checked) se è checkata altrimenti lascio quello di default "false" e procedo con le assegnazioni di altri valori delle Input
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        let newId;
        if (postList.length === 0) {
            newId = 1;
        }
        else {
            const objectId = postList.reduce((previous, next) => {
                return next.id > previous.id ? next : previous;
            });
            newId = objectId.id;
            newId++;
        }

        /* Metodo breve: */
        // Creo prima una copia dell'oggetto posto con il rest operator ...post
        // poi assegno alla rispettiva chiave (cercata dinamicamente in base al valore
        // contenuto in [event.target.name]) il valore assegnato al controllo precedente a value
        setPost({ ...post, id: newId, [event.target.name]: value });
        // setPost([...post, { id: newId, title: event.target.value }]);

    }

    // Funzione che gestisce l'evento al click sul pulsante di invio
    function handlerSubmit(event) {
        event.preventDefault();     //blocco il caricamento della pagina
        // /* Metodo lungo (come sopra): */
        // const newPostList = {...postList};
        // newPostList.push(post);
        // setPostList(newPostList);

        /* Metodo breve (come sopra): */
        setPostList([...postList, post]);

        // Svuoto il form dai valori inseriti dopo il click al pulsante di submit
        setPost(initialPost);
    }

    // Clono l'array della variabile di stato
    const arrayPosts = [...postList];

    //parte html da ritornare
    return (
        <>
            {// Mappo props cities per popolare le card
                arrayPosts.map((post) => {
                    return <Card
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        published={post.published}
                        key={post.id} />
                }
                )}

            < section className="my-4" >
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
                            className="form-control"
                            id="content"
                            rows="5"
                            value={post.content}
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
            </section >
        </>
    );
}