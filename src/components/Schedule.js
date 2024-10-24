import logo from '../assets/SmallLogo.png';
import '../css/Schedule.css';

const Schedule = () => {
    return (
        <section id="Raspored" className="section cc-schedule-section">
            <div id="rasporedCont" className="rasporedCont cc-schedule-container">
                <div className="heading-wrapper">
                    <h1 data-w-id="naslov" className="h1 cc-schedule-heading">Raspored utakmica</h1>
                    <a href="/seniorke-raspored" className="button cc-tertiary w-button">Pročitaj više</a>
                </div>
                <table className="table_component">
                    <tbody className="table_body">
                    <tr className="table_row cc-blue-row">
                        <td className="table_cell left-angle">26.10.2024.</td>
                        <td className="table_cell">Away</td>
                        <td className="table_cell">
                            <div className="game_cell">
                                <img src={logo} className="logo_mini" alt="KK Željezničar logo" />
                                <p className="game_cell_w">KK Željezničar</p>
                                <p className="game_cell_w vs">VS</p>
                                <p className="game_cell_w">KK Konjic</p>
                                <img src={logo} className="logo_mini" alt="KK Konjic logo" />
                            </div>
                        </td>
                        <td className="table_cell right-angle">Sportska dvorna Konjic</td>
                    </tr>
                    <tr className="table_row cc-white-row">
                        <td className="table_cell blue">02.11.2024.</td>
                        <td className="table_cell blue">Home</td>
                        <td className="table_cell">
                            <div className="game_cell">
                                <img src={logo} className="logo_mini" alt="KK Željezničar logo" />
                                <p className="game_cell_b">KK Željezničar</p>
                                <p className="game_cell_b vs">VS</p>
                                <p className="game_cell_b">KK Konjic</p>
                                <img src={logo} className="logo_mini" alt="KK Konjic logo" />
                            </div>
                        </td>
                        <td className="table_cell blue">Sportska dvorna R</td>
                    </tr>
                    <tr className="table_row cc-blue-row">
                        <td className="table_cell">09.11.2024.</td>
                        <td className="table_cell">Away</td>
                        <td className="table_cell">
                            <div className="game_cell">
                                <img src={logo} className="logo_mini" alt="KK Željezničar logo" />
                                <p className="game_cell_w">KK Željezničar</p>
                                <p className="game_cell_w vs">VS</p>
                                <p className="game_cell_w">KK Konjic</p>
                                <img src={logo} className="logo_mini" alt="KK Konjic logo" />
                            </div>
                        </td>
                        <td className="table_cell">Sportska dvorna Zenica</td>
                    </tr>
                    <tr className="table_row cc-white-row">
                        <td className="table_cell blue left-angle-b">16.11.2024.</td>
                        <td className="table_cell blue">Home</td>
                        <td className="table_cell">
                            <div className="game_cell">
                                <img src={logo} className="logo_mini" alt="KK Željezničar logo" />
                                <p className="game_cell_b">KK Željezničar</p>
                                <p className="game_cell_b vs">VS</p>
                                <p className="game_cell_b">KK Konjic</p>
                                <img src={logo} className="logo_mini" alt="KK Konjic logo" />
                            </div>
                        </td>
                        <td className="table_cell blue right-angle-b">Sportska dvorna Konjic</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Schedule;
