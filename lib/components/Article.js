import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

// put styles global so that every time Article created or re-rendered,
// there is no such new instance get created.
const styles = {
  article:{
    paddingBottom:10,
    borderBottomStyle:'solid',
    borderBottomColor:'#aaa',
    borderBottomWidth:1,
    marginBottom:10,
  },
  title:{
    fontWeight:'bold',
  },
  date:{
    fontSize:'0.85em',
    color:'#888',
  },
  author:{
    paddingTop:10,
    paddingBottom:10,
  },
  body:{
    paddingLeft:20,
  }
};

//put this function outside or article to prevent creating this funciton
//every time Article is created and re-rendered

const dateDisplay = (dateString) => new Date(dateString).toDateString();

// or
// const Article = (props, {store} ) =>{
const Article = (props) =>{
  const {article, author} = props;
  //const author = store.lookupAuthor(article.authorId);

  return(
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          <div>{author.firstName} {author.lastName}</div>
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article:PropTypes.shape({
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired
  })
};

function extraProps(store, originalProps){
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}

// const author = store.lookupAuthor(article.authorId);
const ArticleContainer =  storeProvider(extraProps)(Article);

//create another component to extract store out of the context
//this is a container component
// const ArticleContainer = (props, { store }) =>{
//   return <Article {...props} store = { store }/>
// };
//
// // allow article component to use the global context which has a store defined on it.
// // define what type of context we can access
// ArticleContainer.contextTypes = {
//   store: PropTypes.object,
// };

export default ArticleContainer;
