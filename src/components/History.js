import '../css/History.css';
import leftLines from '../assets/Left_lines.svg';
import rightLines from '../assets/Right_lines.svg';

const History = () => {
    return(
        <section className="about-section">
            <div className="heading">
                <img src={leftLines} className="Line-left" alt="left-line"/>
                <h2>Historija kluba</h2>
                <img src={rightLines} className="Line-right" alt="right-line"/>
            </div>

            <div className="years_paragraph_wrapper">
        <span className="left_years">
          <p className="period">Godine</p>
        </span>
                <span>
          <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam sed leo eu metus pulvinar dictum a nec est.
                Nullam dignissim, elit eget tincidunt accumsan, dolor lectus volutpat turpis,
                pretium consequat sem tortor at erat. Duis ligula leo, suscipit ut elementum in,
                maximus quis arcu. Nam fringilla nisl vel turpis feugiat euismod.
                Praesent erat leo, accumsan vitae scelerisque in, viverra eu libero.
                Duis porttitor turpis nec purus malesuada elementum.
                Quisque pretium nibh enim, id sollicitudin arcu vehicula nec.
                Donec bibendum varius euismod. Proin libero turpis, venenatis quis cursus ut, varius sed odio.
                In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam sed leo eu metus pulvinar dictum a nec est.
                Nullam dignissim, elit eget tincidunt accumsan, dolor lectus volutpat turpis,
                pretium consequat sem tortor at erat. Duis ligula leo, suscipit ut elementum in,
                maximus quis arcu. Nam fringilla nisl vel turpis feugiat euismod.
                Praesent erat leo, accumsan vitae scelerisque in, viverra eu libero.
                Duis porttitor turpis nec purus malesuada elementum.
                Quisque pretium nibh enim, id sollicitudin arcu vehicula nec.
                Donec bibendum varius euismod. Proin libero turpis, venenatis quis cursus ut, varius sed odio.
                In hac habitasse platea dictumst.
          </p>
        </span>
            </div>

            <div className="line">
                <hr width="90%" size="2"/>
            </div>
            <div className="years_paragraph_wrapper">
            <span>
                <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam sed leo eu metus pulvinar dictum a nec est.
                Nullam dignissim, elit eget tincidunt accumsan, dolor lectus volutpat turpis,
                pretium consequat sem tortor at erat. Duis ligula leo, suscipit ut elementum in,
                maximus quis arcu. Nam fringilla nisl vel turpis feugiat euismod.
                Praesent erat leo, accumsan vitae scelerisque in, viverra eu libero.
                Duis porttitor turpis nec purus malesuada elementum.
                Quisque pretium nibh enim, id sollicitudin arcu vehicula nec.
                Donec bibendum varius euismod. Proin libero turpis, venenatis quis cursus ut, varius sed odio.
                In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam sed leo eu metus pulvinar dictum a nec est.
                Nullam dignissim, elit eget tincidunt accumsan, dolor lectus volutpat turpis,
                pretium consequat sem tortor at erat. Duis ligula leo, suscipit ut elementum in,
                maximus quis arcu. Nam fringilla nisl vel turpis feugiat euismod.
                Praesent erat leo, accumsan vitae scelerisque in, viverra eu libero.
                Duis porttitor turpis nec purus malesuada elementum.
                Quisque pretium nibh enim, id sollicitudin arcu vehicula nec.
                Donec bibendum varius euismod. Proin libero turpis, venenatis quis cursus ut, varius sed odio.
                In hac habitasse platea dictumst.
            </p>
        </span>
                <span className="left_years">
            <p className="period">Godine</p>
        </span>
            </div>
            <div className="line">
                <hr width="90%" size="2"/>
            </div>

        </section>
    );
};

export default History;