import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between border-b-2 mx-4 p-4'>
      <h1 className='text-4xl'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
      </div>
    );
};

export default Header;