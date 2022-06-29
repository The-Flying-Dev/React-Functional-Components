import pic from './images/bulbasaur.jpg';

function Showcase() {

  const favPokemon = 'Bulbasaur';
  const pokeCharacteristics = {
    type: 'Grass',
    move: 'Vine Whip',
  };

  return (
    <div
      style={{ 
      paddingTop: '5vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'space-between'
      }}>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={pic} alt='Bulbasaur' 
        style={{ 
        height: '50vh', 
        width: '25vw', 
        paddingTop: '5vh',
        borderRadius: '50%'        
        }}
      />
      <h2 
        style={{ paddingTop: '10vh' }}>
        {favPokemon}'s type is <span 
        style={{ 
          backgroundColor: 'green', 
          color: 'white'
        }}
      >
        {pokeCharacteristics.type} </span> 
        and one of the moves is <span 
        style={{ 
          backgroundColor: 'white', 
          color: 'green' 
        }}
      >
        {pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;