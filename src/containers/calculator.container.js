import React from "react";
import SelectInput from "../components/common/SelectInput";

export class ManageCalculatorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedIncome: "18176",
      selectedWorkingHours: "0",
      selectedKidsAge: "",
      incomes: [
        {
          value: "18176",
          text: "€ 18.176 of minder"
        },
        {
          value: "19386",
          text: "€ 18.177 - € 19.386"
        }
      ],
      kidsages: [
        {
          value: "0",
          text: "0 years"
        },
        {
          value: "1",
          text: "1 years"
        }
      ],

      workinghours: [
        {
          value: "0",
          text: "0 hours a week"
        },
        {
          value: "1",
          text: "1 hours a week"
        },
        {
          value: "2",
          text: "2 hours a week"
        },
        {
          value: "3",
          text: "3 hours a week"
        }
      ]
    };
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleworkinghoursChange = this.handleworkinghoursChange.bind(this);
    this.handlekidsageChange = this.handlekidsageChange.bind(this);
  }

  handleIncomeChange(e) {
    this.setState({
      selectedIncome: e.target.value
    });
  }
  handleworkinghoursChange(e) {
    this.setState({
      selectedWorkingHours: e.target.value
    });
  }
  handlekidsageChange(e) {
    this.setState({
      selectedKidsAge: e.target.value
    });
  }
  render() {
    return (
      <div id="container">
        <div id="wrapper">
          <div className="centered">
            <h2>Net childcare costs calculator</h2>
            <div className="clearfix" />
            <form>
              <div className="fr_intro_text">
                <p>
                  Fill in your situation and we will calculate the net costs* of
                  the chosen child care.<br />*you may be entitled to child care
                  benefit. This is a contribution towards the costs of child
                  care. Check the{" "}
                  <a
                    href="http://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/benefits/moving_to_the_netherlands/my_child_goes_to_a_child_care_centre/"
                    target="_blank"
                  >
                    conditions
                  </a>.
                </p>
              </div>
              <div className="fr_berekening_wrap">
                <h3>Your situation</h3>
                <div className="fr_personal_data vlak">
                  <dl className="dl-horizontal">
                    <dt>Assessment income per year</dt>
                    <SelectInput
                      name="inkomen"
                      id="inkomen"
                      className="inputbox"
                      value={this.state.selectedIncome}
                      options={this.state.incomes}
                      onChange={this.handleIncomeChange}
                    />
                  </dl>
                  <dl className="dl-horizontal">
                    <dt>Least working hours </dt>
                    <SelectInput
                      name="uren_minst_werkende"
                      id="uren_minst_werkende"
                      className="inputbox"
                      value={this.state.selectedWorkingHours}
                      options={this.state.workinghours}
                      onChange={this.handleworkinghoursChange}
                    />
                  </dl>
                </div>
                <div className="fr_kinderen_opvangen">
                  <h3>Kids and childcare</h3>
                  <div className="fr_wrap">
                    <div className="fr_kinderen">
                      <div className="fr_kind">
                        <div className="fr_kind_details">
                          <div className="fr_kind_img">
                            <img src="https://www.rekentoolkinderopvang.nl//media/com_rekentool/images/small/782071_kind.jpg" />
                          </div>
                          <input
                            type="text"
                            name="naam_kind[]"
                            className="naam_kind"
                            placeholder="Name of child"
                          />
                          <SelectInput
                            name="leeftijd[]"
                            id="leeftijd"
                            className="inputbox required"
                            value={this.state.selectedKidsAge}
                            defaultOption="- Age -"
                            options={this.state.kidsages}
                            onChange={this.handlekidsageChange}
                          />
                        </div>
                        <div className="fr_kind_opvangtypes_wrap">
                          <div className="fr_kind_opvangtypes">
                            <div
                              className="fr_opvang"
                              data-uren-maand="0"
                              data-opvangobjid="99336082"
                            >
                              <div className="fr_opvang_inner">
                                <p>Childcare</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="link voegOpvangToe">
                          <span className="iconRound large animated">
                            <span className="icon">+</span>
                          </span>{" "}
                          Add another childcare
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageCalculatorPage;
