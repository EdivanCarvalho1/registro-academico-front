"use client";
import styles from "./header.module.css"
import { FaSchool } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';

export default function Header(){

    return(
        <header className={styles.matricula_header}>
            
            <div className={`${styles.logo_container} d-flex align-items-center justify-content-center`}>
                <FaSchool className={styles.logo} />
            </div>

            <div className={styles.nav}>   

                <Dropdown>
                    <Dropdown.Toggle variant="dark">
                        Registro Escolar
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="">
                        Horário
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="">
                        Ensino
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="">
                        Ajuda
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="">
                        Configuraçao
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>

            <div className={styles.perfil_container}>
                <div className={styles.perfil_borda}>
                    <FaUserCircle className={styles.perfil} />
                    <FaAngleDown />
                </div>
            </div>

        </header>
    )
}