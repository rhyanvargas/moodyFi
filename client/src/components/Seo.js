import Helmet from 'react-helmet'

const Seo = ({title, description = "MoodiFy helps you discover your mood based on your Spotify listening history"}) => {
    return (
    <Helmet>
      <title>`{title} | MoodyFi - How Moody Are You?`</title>
      <meta name="description" content={description}/>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/> 
    </Helmet>
    )
}

export default Seo