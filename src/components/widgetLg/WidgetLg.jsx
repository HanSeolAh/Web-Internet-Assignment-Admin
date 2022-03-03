import "./widgetLg.css";

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className = {"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className = "widgetLg">
        <h3 className="widgetLgTitle">
          Queue of Consultants
        </h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">
              Doctors
            </th>
            <th className="widgetLgTh">
              Date
            </th>
            <th className="widgetLgTh">
              Specialty Field
            </th>
            <th className="widgetLgTh">
              Status
            </th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-40.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName">
                Dr Aaliyah 
              </span>
            </td>
            <td className="widgetLgDate">
              24th Feb 2022
            </td>
            <td className="widgetLgSpecialty">
              Obstetrician
            </td>
            <td className="widgetLgStatus">
              <Button type = "Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://www.freepnglogos.com/uploads/doctor-png/doctor-declaire-lamacchia-orthopaedic-institute-15.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName">
                Dr Brenton
              </span>
            </td>
            <td className="widgetLgDate">
              26th Feb 2022
            </td>
            <td className="widgetLgSpecialty">
              Ophthalmologist
            </td>
            <td className="widgetLgStatus">
              <Button type = "Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://mpng.subpng.com/20180501/qww/kisspng-physician-assistant-stock-photography-royalty-free-5ae83fe6dfaf36.7154338615251701509162.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">
                Dr Adriel
              </span>
            </td>
            <td className="widgetLgDate">
              28th Feb 2022
            </td>
            <td className="widgetLgSpecialty">
              Pediatrician
            </td>
            <td className="widgetLgStatus">
              <Button type = "Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://p1.hiclipart.com/preview/640/119/589/doctor-medicine-physician-stethoscope-health-care-nursing-estetoscopio-doctor-of-medicine-png-clipart.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">
                Dr Daniella
              </span>
            </td>
            <td className="widgetLgDate">
              23rd Feb 2022
            </td>
            <td className="widgetLgSpecialty">
              Orthopedist
            </td>
            <td className="widgetLgStatus">
              <Button type = "Approved" />
            </td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg