import headerStyles from '../styles/Header.module.css'

const Header = () => {
      return (
            <div>
                <h1 className={headerStyles.title}><span>Simple</span> Next Website</h1> 
                <style jsx>
                  {`
                        .title {
                              color: green;
                        }
                  `}
                </style>
            </div>
      );
};

export default Header;