import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
    state = {
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "min-width": "300px", "min-height": "120px" }} 
                                    name="content" 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                    </ul>
                </section>
            </article>
        )
    }
}

ReactDOM.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />, 
    document.querySelector('#root')
);