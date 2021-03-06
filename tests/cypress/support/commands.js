import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
    failureThreshold: 0.03,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'fullPage',
});

Cypress.Commands.add("setResolution", (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
})