import Head from 'next/head';

const Meta = (props) => {
    return( 
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
        <meta name="description" content={props.content} />
        <meta name="keywords" content="BattleStar, Fast Cup, CSGO, ксго" />
        <link rel="icon" href="/../favicon.png" />
        <title>BattleStar {props.title}</title>
    </Head>
)};

export default Meta;