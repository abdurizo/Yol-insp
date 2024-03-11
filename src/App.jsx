import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import classN from 'classnames';

import SlideBar from './components/SideBar';
import Navbar from './components/Navbar';

import BasicInformation from './pages/ListOfObjects/BasicInformation/index.jsx';
import ListOfObjects from './pages/ListOfObjects/index.jsx';
import Documents from './pages/documents/Proceedings/index.jsx';
import OnlyDisadvantages from './pages/documents/Proceedings/OnlyDisadvantages';
import Participants from './pages/ListOfObjects/Participants/index.jsx';
import CompleteQuestionnaire from './pages/documents/Proceedings/CompleteQuestionnaire/Index';
import Formed from './pages/documents/Formed';
import Instructions from './pages/instructions/Proceedings/Index';
import NumberDocument from './pages/documents/Formed/NumberDocument/Index';
import ReferenceNumber from './pages/instructions/ReferenceNumber';
import ExecutionOfInstructions from './pages/instructions/ReferenceNumber/ExecutionOfInstructions';

function App() {
    const [isOpen, setOpen] = useState(false)

    return (
        <Router>
            <div className={`container ${isOpen ? 'close_container' : ''}`}>
                <div className="slidepanel">
                    <SlideBar state={isOpen} setState={setOpen}/>
                </div>

                <div></div>

                <div className="right_block">
                    <Navbar/>
                    <Routes>

                        <Route path="/">
                            <Route index element={<ListOfObjects/>}/>
                            <Route path="objects" element={<ListOfObjects/>}/>
                            <Route path="objects/:id" element={<BasicInformation/>}/>
                            <Route path="objects/:id/participants" element={<Participants/>}/>
                        </Route>

                        <Route path="/documents">
                            <Route element={<Documents/>} index/>
                            <Route path="formed" element={<Formed/>}/>
                            <Route path=":id" element={<OnlyDisadvantages/>}/>
                            <Route path=":id/complete-questionnaire" element={<CompleteQuestionnaire/>}/>
                            <Route path=":id/number-document" element={<NumberDocument/>}/>
                        </Route>


                        <Route path="/instructions">
                            <Route index element={<Instructions/>}></Route>
                            <Route path=":reference-number" element={<ReferenceNumber/>}/>
                            <Route path=":reference-number/instructions" element={<ExecutionOfInstructions/>}/>
                        </Route>

                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
