import Card from "./Card";
// Importo l'oggetto posts
import posts from '../data/posts';

export default function MainComponent() {
    const arrayPosts = [...posts];
    return (
        // Mappo props cities per popolare le card
        arrayPosts.map((post) => {
            // Ritorno la card solo se questa ha la chiave settata su true
            return <Card
                id={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                state={post.state}
                key={post.id} />
        }
        )
    );
}