/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({

    /**
     * Fires the ui:closeDialog event.
     *
     * @param {Aura.Component} cmp the ui:dialogComponent
     * @param {Boolean} confirmClicked if the 'confirm' or 'cancel' button was clicked
     * @return {void}
     */
    confirmOrCancel : function(dialog, confirmClicked) {

        var closeEvent = $A.getEvt("markup://ui:closeDialog");

        closeEvent.setParams({
            dialog : dialog,
            confirmClicked : confirmClicked
        });
        closeEvent.fire();

    }

})// eslint-disable-line semi
